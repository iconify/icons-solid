import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k1jarzbmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k1jarzbmw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:arrow-top-right-3-square-fill"} {...others} />);
}

export default Component;
