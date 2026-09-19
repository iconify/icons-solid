import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ysk3uyb0b.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ysk3uyb0b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:oral-contraception-pillsx21"} {...others} />);
}

export default Component;
