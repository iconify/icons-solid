import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jdk7xg9rx {
  fill: currentColor;
  d: path("M7.192 20v-1.538l.77-.77H3V4.041h1.425l.96.959H4v11.692h11.7L1.777 2.808l.708-.708l18.684 18.685l-.707.707l-3.723-3.8h-.7l.769.77V20zm13.374-2.766L20 16.67V5H8.158l-1-1H21v13.235zm-10.87-6.507");
}
</style><path class="jdk7xg9rx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:mimo-disconnect-outline-sharp"} {...others} />);
}

export default Component;
