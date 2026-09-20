import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c6ojhhb3m.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="c6ojhhb3m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:pen-1-solid"} {...others} />);
}

export default Component;
