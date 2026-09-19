import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/ks4cp4bzy.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="ks4cp4bzy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gravity-ui:face-neutral"} {...others} />);
}

export default Component;
