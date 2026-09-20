import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/eizb1y4-y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="eizb1y4-y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-angular-filled"} {...others} />);
}

export default Component;
