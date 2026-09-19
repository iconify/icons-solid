import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wumggdzwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wumggdzwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"covid:personal-hygiene-clean-toothpaste"} {...others} />);
}

export default Component;
