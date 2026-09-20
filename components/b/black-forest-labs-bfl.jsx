import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b8goj0b8v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b8goj0b8v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:black-forest-labs-bfl"} {...others} />);
}

export default Component;
