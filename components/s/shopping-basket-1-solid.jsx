import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bb60eqbtz.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="bb60eqbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:shopping-basket-1-solid"} {...others} />);
}

export default Component;
