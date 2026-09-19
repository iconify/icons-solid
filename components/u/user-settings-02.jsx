import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/hv10n728u.css';
import '../../css/k/kx5symxxl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><circle class="hv10n728u"/><path class="kx5symxxl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:user-settings-02"} {...others} />);
}

export default Component;
