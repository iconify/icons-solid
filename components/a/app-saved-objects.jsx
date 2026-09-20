import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/th_86r0cc.css';
import '../../css/k/k0mh91bme.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="ouiIcon__fillSecondary th_86r0cc"/><path class="k0mh91bme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-saved-objects"} {...others} />);
}

export default Component;
