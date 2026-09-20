import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cs41k2b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="cs41k2b5l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:user-single-neutral-female-remix"} {...others} />);
}

export default Component;
