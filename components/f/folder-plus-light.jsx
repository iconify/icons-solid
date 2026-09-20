import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m14-lebxp.css';
import '../../css/j/j84ijjsgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m14-lebxp"/><path clip-rule="evenodd" class="j84ijjsgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:folder-plus-light"} {...others} />);
}

export default Component;
