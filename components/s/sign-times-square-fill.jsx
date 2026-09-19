import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q0nbbgb9b.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="q0nbbgb9b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-times-square-fill"} {...others} />);
}

export default Component;
