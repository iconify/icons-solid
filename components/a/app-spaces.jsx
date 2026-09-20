import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zx3heqy7f.css';
import '../../css/t/t5lk8xcct.css';
import '../../css/i/indyp0f7r.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary zx3heqy7f"/><path class="t5lk8xcct"/><path class="indyp0f7r ouiIcon__fillSecondary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-spaces"} {...others} />);
}

export default Component;
