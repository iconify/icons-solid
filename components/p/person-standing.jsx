import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/ja7twxd8s.css';
import '../../css/k/k74o-88ql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="ja7twxd8s"/><path class="k74o-88ql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:person-standing"} {...others} />);
}

export default Component;
