import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/ldnmay76x.css';
import '../../css/i/in5wtwq8h.css';
import '../../css/q/qufqqzb5y.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="ldnmay76x"/><path class="in5wtwq8h"/><path clip-rule="evenodd" class="qufqqzb5y"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:o-button-blood-type"} {...others} />);
}

export default Component;
