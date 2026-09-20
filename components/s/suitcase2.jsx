import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k6ii2cbwt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="k6ii2cbwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:suitcase2"} {...others} />);
}

export default Component;
