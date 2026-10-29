import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycko3m6rg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ycko3m6rg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:swiss-franc"} {...others} />);
}

export default Component;
