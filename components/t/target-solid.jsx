import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s2llityiz.css';
import '../../css/g/g7hfw0b6x.css';
import '../../css/h/hqofnceah.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};
const content = `<circle class="clr-i-solid clr-i-solid-path-1 s2llityiz"/><path class="clr-i-solid clr-i-solid-path-2 g7hfw0b6x"/><path class="clr-i-solid clr-i-solid-path-3 hqofnceah"/><path class="m2o3sh-9c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"clarity:target-solid"} {...others} />);
}

export default Component;
