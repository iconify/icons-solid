import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/ngwq2cbws.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ngwq2cbws"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:medal-star"} {...others} />);
}

export default Component;
