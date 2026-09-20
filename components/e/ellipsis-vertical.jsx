import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jxl67pbry.css';
import '../../css/j/ja7twxd8s.css';
import '../../css/d/d2xz6hb5j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="jxl67pbry"/><circle class="ja7twxd8s"/><circle class="d2xz6hb5j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:ellipsis-vertical"} {...others} />);
}

export default Component;
