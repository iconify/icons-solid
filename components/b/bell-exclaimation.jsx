import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucyflh_rw.css';
import '../../css/h/hoos2y8tw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucyflh_rw"/><path class="hoos2y8tw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:bell-exclaimation"} {...others} />);
}

export default Component;
