import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cqk2l_13t.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cqk2l_13t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:octagon-fill"} {...others} />);
}

export default Component;
