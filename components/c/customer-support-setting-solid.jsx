import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fta2jcb7k.css';
import '../../css/s/s-yjq38cr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fta2jcb7k"/><path clip-rule="evenodd" class="s-yjq38cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:customer-support-setting-solid"} {...others} />);
}

export default Component;
