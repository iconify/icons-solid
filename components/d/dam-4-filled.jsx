import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/umcxplilb.css';
import '../../css/r/r2vwgjbvw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="umcxplilb"/><path class="r2vwgjbvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:dam-4-filled"} {...others} />);
}

export default Component;
