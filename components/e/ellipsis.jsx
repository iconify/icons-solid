import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s5qf56fne.css';
import '../../css/j/jxl67pbry.css';
import '../../css/r/r2l1z561j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="s5qf56fne"/><circle class="jxl67pbry"/><circle class="r2l1z561j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:ellipsis"} {...others} />);
}

export default Component;
