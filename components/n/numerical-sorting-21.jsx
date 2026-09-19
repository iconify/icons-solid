import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egp4naccw.css';
import '../../css/x/xisz-8bbz.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="egp4naccw"/><path class="xisz-8bbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:numerical-sorting-21"} {...others} />);
}

export default Component;
