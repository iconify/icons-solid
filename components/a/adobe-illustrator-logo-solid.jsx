import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zjn48nb8i.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="zjn48nb8i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:adobe-illustrator-logo-solid"} {...others} />);
}

export default Component;
