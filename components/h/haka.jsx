import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xiu1hih7a.css';
import '../../css/c/cjifcyb7a.css';
import '../../css/p/pvmf4ib9r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xiu1hih7a"/><path class="cjifcyb7a"/><path class="pvmf4ib9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:haka"} {...others} />);
}

export default Component;
