import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j3e4etbxf.css';
import '../../css/j/jgee_j83r.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j3e4etbxf"/><path class="jgee_j83r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:composetoolbox"} {...others} />);
}

export default Component;
