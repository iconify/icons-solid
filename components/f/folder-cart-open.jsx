import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g-qxuibhr.css';
import '../../css/n/ng2kf2fda.css';
import '../../css/i/i6utg9b0i.css';
import '../../css/c/c1ia1gbuk.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="g-qxuibhr"/><circle class="ng2kf2fda"/><circle class="i6utg9b0i"/><path class="c1ia1gbuk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-cart-open"} {...others} />);
}

export default Component;
