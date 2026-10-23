import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fgcxa8y2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fgcxa8y2f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:japanese-yen"} {...others} />);
}

export default Component;
