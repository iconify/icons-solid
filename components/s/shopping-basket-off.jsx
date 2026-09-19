import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tmh37sbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="tmh37sbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:shopping-basket-off"} {...others} />);
}

export default Component;
