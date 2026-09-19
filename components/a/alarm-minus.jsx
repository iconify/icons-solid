import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c41935krg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c41935krg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"griddy-icons:alarm-minus"} {...others} />);
}

export default Component;
