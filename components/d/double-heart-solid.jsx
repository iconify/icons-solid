import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/njun85gyv.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="njun85gyv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp:double-heart-solid"} {...others} />);
}

export default Component;
