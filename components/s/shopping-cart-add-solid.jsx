import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/af457gbun.css';
import '../../css/n/ndvwudbno.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="af457gbun"/><path class="ndvwudbno"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shopping-cart-add-solid"} {...others} />);
}

export default Component;
