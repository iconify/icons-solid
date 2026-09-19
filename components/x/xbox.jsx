import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ued0hpkml.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ued0hpkml"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:xbox"} {...others} />);
}

export default Component;
