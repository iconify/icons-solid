import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gl6b8fzab.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="gl6b8fzab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:moustache-remix"} {...others} />);
}

export default Component;
