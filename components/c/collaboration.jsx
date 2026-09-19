import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ghwrkz-9q.css';
import '../../css/w/wagegtbdz.css';
import '../../css/j/j8oiwjbra.css';
import '../../css/i/ieleq8bes.css';
import '../../css/f/f63cuib3o.css';
import '../../css/i/ielrgn66f.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ghwrkz-9q"/><path class="wagegtbdz"/><g class="j8oiwjbra"><circle class="ieleq8bes"/><circle class="f63cuib3o"/></g><path class="ielrgn66f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:collaboration"} {...others} />);
}

export default Component;
