import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/edy1eelka.css';
import '../../css/a/afk9nsbuo.css';
import '../../css/k/khev3mkgt.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-solid clr-i-solid-path-1 edy1eelka"/><path class="afk9nsbuo clr-i-solid clr-i-solid-path-2"/><path class="clr-i-solid clr-i-solid-path-3 khev3mkgt"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:administrator-solid"} {...others} />);
}

export default Component;
