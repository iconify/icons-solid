import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jv851mbmg.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="jv851mbmg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:contact-book-remix"} {...others} />);
}

export default Component;
