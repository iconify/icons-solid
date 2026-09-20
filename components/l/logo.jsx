import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/c/c4x8o2l8q.css';
import '../../css/c/csof25-mz.css';
import '../../css/z/z1acx-bhx.css';
import '../../css/h/h5qes9n5g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="c4x8o2l8q"/><path class="csof25-mz"/><path class="z1acx-bhx"/><path class="h5qes9n5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:logo"} {...others} />);
}

export default Component;
