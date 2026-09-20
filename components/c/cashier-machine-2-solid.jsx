import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z91v7ebgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="z91v7ebgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:cashier-machine-2-solid"} {...others} />);
}

export default Component;
