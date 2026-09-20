import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/ak6rhcbqc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="ak6rhcbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:warning"} {...others} />);
}

export default Component;
