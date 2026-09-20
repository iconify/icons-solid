import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ca_p1nbxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ca_p1nbxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"si:clear-all-fill"} {...others} />);
}

export default Component;
