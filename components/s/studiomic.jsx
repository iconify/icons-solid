import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0cjn19st.css';
import '../../css/v/vttnoxb3a.css';
import '../../css/t/thyk-8lft.css';
import '../../css/l/l-vv0zlfy.css';
import '../../css/g/gq7wmbbhc.css';
import '../../css/f/fk37twbqz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="l0cjn19st"/><path class="vttnoxb3a"/><path class="thyk-8lft"/><path class="l-vv0zlfy"/><ellipse class="gq7wmbbhc"/><path class="fk37twbqz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:studiomic"} {...others} />);
}

export default Component;
