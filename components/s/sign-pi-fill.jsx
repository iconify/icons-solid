import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mozh4tbrw.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="mozh4tbrw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:sign-pi-fill"} {...others} />);
}

export default Component;
