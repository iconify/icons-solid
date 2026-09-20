import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/knw8v0bgi.css';
import '../../css/f/fr9co-jbx.css';
import '../../css/c/c3eibnbrh.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="knw8v0bgi"/><path clip-rule="evenodd" class="fr9co-jbx"/><path class="c3eibnbrh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"qlementine-icons:sun-16"} {...others} />);
}

export default Component;
