import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mw50y7rwg.css';
import '../../css/e/ec0iwibgb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mw50y7rwg"/><path class="ec0iwibgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:image-trash-light"} {...others} />);
}

export default Component;
