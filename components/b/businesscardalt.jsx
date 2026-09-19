import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yi0a_4boh.css';

const viewBox = {"width":1024,"height":896};
const content = `<path class="yi0a_4boh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:businesscardalt"} {...others} />);
}

export default Component;
