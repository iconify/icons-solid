import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/egp4naccw.css';
import '../../css/j/jexl-dbou.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="egp4naccw"/><path class="jexl-dbou"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:numerical-sorting-12"} {...others} />);
}

export default Component;
