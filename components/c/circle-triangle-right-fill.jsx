import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e2ebrqn7o.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="e2ebrqn7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:circle-triangle-right-fill"} {...others} />);
}

export default Component;
