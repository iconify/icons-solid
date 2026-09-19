import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b-_m7sbyf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="b-_m7sbyf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:shopping-bag-fill"} {...others} />);
}

export default Component;
