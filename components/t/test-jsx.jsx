import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nycdyjolw.css';
import '../../css/o/o7pmz67-b.css';
import '../../css/k/k8-ktvkft.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="nycdyjolw"/><circle class="o7pmz67-b"/><path class="k8-ktvkft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:test-jsx"} {...others} />);
}

export default Component;
